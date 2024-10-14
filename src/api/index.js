import { get, post, put, deletes } from '@/request.js'
const httpManager = {
    test: () => get("test")
};
export { httpManager };