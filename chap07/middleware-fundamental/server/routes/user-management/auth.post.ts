import { User, ReturnJSONAuth } from "~/interfaces";

export default defineEventHandler(
    async (event): Promise<ReturnJSONAuth> => {
        // レスポンスオブジェクトの各プロパティの初期値を用意
        let resultVal = 0;
        let tokenVal = '';
        let loginUser: User | null = null;

        try {
            // リクエストボディを取得
            const body = await readBody(event);
            // この時点でエンドポイント側の処理は成功とみなす
            resultVal = 1;
            // ログインIDとパスワードが正しければ
            if (body.loginId == 'bow' && body.password == 'wow') {
                // アクセストークンを生成
                tokenVal = 'abcsefghijklmn';
                // ログインユーザ情報を格納
                loginUser = {
                    id: 1234,
                    name: '山田五郎',
                    loginId: body.loginId,
                    password: "",
                }
            }
            // エラー処理
        } catch (err) {
            console.log(err);
        }

        return {
            result: resultVal,
            token: tokenVal,
            user: loginUser,
        }
    }
);