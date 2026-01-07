import type { RequestHandler } from '@sveltejs/kit'

const ADMIN_GRAPHQL_URL ='http://localhost:3000/api/graphql'

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { name, phone, message } = await request.json().catch(() => ({}))

    if (
      typeof name !== 'string' ||
      typeof phone !== 'string' ||
      typeof message !== 'string'
    ) {
      return new Response(
        JSON.stringify({ error: 'Некорректные данные формы' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (!name.trim() || !phone.trim()) {
      return new Response(
        JSON.stringify({ error: 'Имя и телефон обязательны' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const graphqlQuery = {
      query: `
        mutation CreateContactRequest($data: ContactRequestCreateInput!) {
          createContactRequest(data: $data) {
            id
          }
        }
      `,
      variables: {
        data: {
          name: name.trim(),
          phone: phone.trim(),
          message: message.trim(),
        },
      },
    }

    const response = await fetch(ADMIN_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery),
    })

    if (!response.ok) {
      const text = await response.text().catch(() => '')
      console.error('Keystone error:', response.status, text)
      return new Response(
        JSON.stringify({ error: 'Не удалось отправить заявку. Попробуйте позже.' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const body = await response.json().catch(() => null)

    if (body?.errors) {
      console.error('Keystone GraphQL errors:', body.errors)
      return new Response(
        JSON.stringify({ error: 'Ошибка при сохранении заявки.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (e) {
    console.error('Contact endpoint error:', e)
    return new Response(
      JSON.stringify({ error: 'Внутренняя ошибка сервера.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}


