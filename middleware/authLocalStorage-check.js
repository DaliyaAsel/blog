export default function (context) {
  // authLocalStorage-check прописываем  и в layout-> admin.vue в массиве middleware
  if (process.client) { // сервер не понимает localStorage, поэтому  localStorage вызываем только на клиенте, в режиме dev будет ошибка
    context.store.dispatch('initAuth', null)
  } else { // если есть сервер
    context.store.dispatch('initAuth', context.req) // для поддержки активных сессий
  }
}
