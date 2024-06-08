import type { Member, ReturnJSONMembers } from "@/interfaces";

export default defineEventHandler(
    async (event): Promise<ReturnJSONMembers> => {
        // 空の会員情報Mapオブジェクトの用意
        let memberList = new Map<number, Member>();
        let resultVal = 0;

        try {
            // ストレージの用意
            const storage = useStorage();
            // ストレージから会員情報JSONオブジェクトを取得
            const memberListStorage = await storage.getItem("local:member-management_members");
            // 会員リスト情報JSONオブジェクトが存在するなら
            if (memberListStorage != undefined) {
                // 会員リスト情報JSONオブジェクトを会員リストをMapに変換
                memberList = new Map<number, Member>(memberListStorage as any);
            }
            resultVal = 1;
        } catch (err) {
            console.log(err);
        }
        const memberListValues = memberList.values();
        const memberListArray = Array.from(memberListValues);
        return {
            result: resultVal,
            data: memberListArray
        }
    }
);