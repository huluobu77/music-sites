import { get, post, put, deletes } from '@/request.js'
const httpManager = {
    test: () => get("test"),
    getAllBanner: () => get("banner/getAllBanner")
};
export { httpManager };