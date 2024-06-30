<script setup lang="ts">
import type { User } from '~/interfaces';

definePageMeta({
    layout: "loggedout"
});

// ログイン入力コントール用テンプレート変数
const loginId = ref("");
// パスワード入力コントール用テンプレート変数
const password = ref("");
// ペンディング(読込中)かどうかを表すテンプレート変数
const pending = ref(false);
// エンドポイント側でエラーがないことを表すテンプレート変数
const noServerError = ref(true);
// 認証が失敗したことを表すテンプレート変数
const authFailed = ref(false);
// ログインボタンクリック時の処理メソッド
const onLoginButtonClick = async (): Promise<void> => {
    // ペンディングをtrueに変更
    pending.value = true;
    // authFailedを初期値に変更
    authFailed.value = false;
    // noServerErrorを初期値に変更
    noServerError.value = true;
    // ログインデータをPOST送信
    const asyncData = await useFetch(
        "/user-management/auth",
        {
            method: "POST",
            body: {
                loginId: loginId.value,
                password: password.value
            }
        }
    );
    if (asyncData.error.value == null && asyncData.data.value != null && asyncData.data.value.result == 1) {
        if (asyncData.data.value.token != "" && asyncData.data.value.user != null) {
            // ログインユーザー情報をクッキーに格納
            const loginUserCookie = useCookie<User|null>("loginUser");
            loginUserCookie.value = asyncData.data.value.user;

            // アクセストークン文字列をクッキーに格納
            const loginTokenCookie = useCookie<string|null>("loginToken");
            loginTokenCookie.value = asyncData.data.value.token;
            
            // トップ画面に遷移
            await navigateTo("/");
        } else {
            pending.value = false;
            authFailed.value = true;
        }
        // エンドポイント側の処理が失敗した場合
    } else {
        pending.value = false;
        noServerError.value = false;
    }
}

</script>

<template>
    <h1>ログイン</h1>
    <p v-if="pending">ログイン中...</p>
    <template v-else>
        
    </template>
</template>