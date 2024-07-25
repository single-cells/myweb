const ServerIP = "http://127.0.0.1:8000/"
//调用的api
export const NetworkApi = {
    checkLoginStatus: "/api/check-login-status",
    fetchWaitList: "/api/fetch-all-waitlist"
    //else api url
}
//基本get方法，参数已json（）
export function GetToServer(url = "", callbackFunc = () => { }) {

    var totalUrl = ServerIP + url
    fetch(totalUrl, {
        method: "GET",
        credentials: "include"
    })
        .then(
            (re) => re.json()
        )
        .then(
            (re) => callbackFunc(re)
        )
        .catch(
            (re) => callbackFunc(re)
        )



}