/* eslint-disable no-undef */

async function request<TResponse>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
): Promise<TResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://localhost:3000'

  const response = await fetch(`${baseUrl}/${input}`, init)
  return await response.json()
}

export const api = {
  get: async <TResponse>(
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) =>
    await request<TResponse>(input, {
      cache: 'no-store',
      ...init,
      method: 'GET',
    }),
  post: async <TResponse, TBody>(
    input: RequestInfo | URL,
    body: TBody,
    init?: RequestInit | undefined,
  ) =>
    await request<TResponse>(input, {
      cache: 'no-store',
      ...init,
      method: 'POST',
      body: JSON.stringify(body),
    }),
}
