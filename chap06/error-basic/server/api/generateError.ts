export default defineEventHandler(
    (evnet): never => {
        throw createError("サーバ側でのエラー発生。");
    }
);