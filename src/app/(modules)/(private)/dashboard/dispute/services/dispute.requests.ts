import { api } from '@/app/common/config/api'

import {
  CreateBidBody,
  CreateBidResponse,
} from '../interfaces/dispute.interface'

const disputeServerRequests = {
  listBids: async () => api.get(''),
}

const disputeClientRequests = {
  createBid: async (body: CreateBidBody) =>
    api.post<CreateBidResponse, CreateBidBody>('/bid', body),
}

export const disputeRequests = {
  server: disputeServerRequests,
  client: disputeClientRequests,
}
