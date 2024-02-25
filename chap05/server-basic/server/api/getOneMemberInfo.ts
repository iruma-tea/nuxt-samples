import type { Member } from "@/interfaces";
import { createMemberList } from "@/membersDB";

export default defineEventHandler(
    (event): Member => {
        // クエリーパラメータの取得
        const query = getQuery(event);
        // 会員リスト情報のMapオブジェクトを取得
        const memberList = createMemberList();
        // クエリパラメータのIDを数値に変換
        const idNo = Number(query.id);
        // クエリパラメータに該当する会員情報オブジェクトを取得
        const member = memberList.get(idNo) as Member;

        return member
    }
);