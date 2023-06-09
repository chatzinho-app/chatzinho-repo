// POST /bids
interface CreateBidBody {
  value: number
}
interface CreateBidResponse {
  status: string
}
export type { CreateBidBody, CreateBidResponse }

// GET /bids
interface listBidsResponse {
  userId: string
  value: number
}
export type { listBidsResponse }
