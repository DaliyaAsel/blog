export default function (contex) {
    if (!contex.store.getters.checkAuthUser) { //если пользователя не будет
        contex.redirect('/admin/auth')
    }
}