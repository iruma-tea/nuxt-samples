import { Member, ReturnJSONMembers } from "@/interfaces";
import { createMemberList } from "@/membersDB";

export default defineEventHandler(
    (event): ReturnJSONMembers => {
        // ルートパラメータの取得
        const params = event.context.params;
        // 会員情報リストMapオブジェクトの生成
        const memberList = createMemberList();
        const idNo = Number(params!.id);
        // ルートパラメタに該当する会員情報オブジェクトを取得
        const member = memberList.get(idNo) as Member;
        return {
            result: 1,
            data: [member],
        }
    }
);

