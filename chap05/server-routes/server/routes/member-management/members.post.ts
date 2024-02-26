import { Member, ReturnJSONMembers } from "@/interfaces";

export default defineEventHandler(
    async (event): Promise<ReturnJSONMembers> => {
        const body = await readBody(event);
        const member = body as Member;
        console.log(member);
        return {
            result: 1,
            data: [member],
        }
    }
);