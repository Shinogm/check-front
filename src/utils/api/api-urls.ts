export const API_URL = 'http://192.168.50.199:3001'

export const APIENDPOINST = {
  // Users
  postRegisterPoint: `${API_URL}/user/create`,
  postLoginPoint: `${API_URL}/user/user/login`,
  identifyWorkerPoint: `${API_URL}/user/user/identify`,
  getAllUsersPoint: `${API_URL}/user/get`,
  getAllUserByPermIdPoint: (permID: number) => `${API_URL}/user/get/permissions/${permID}`,
  getWorkerScheduleByScanPoint: `${API_URL}/user/get/horario`,
  putUserByIdPoint: (id: number) => `${API_URL}/user/update/${id}`,
  deleteUserByIdPoint: (id: number) => `${API_URL}/user/delete/${id}`,
  // Permissions
  getPermsAllPoint: `${API_URL}/perms/get`,
  // Fingers
  postScanFingerPoint: `${API_URL}/finger/create`,
  postCreateWorkerFingerePoint: `${API_URL}/finger/create/worker`,
  getFingerImageBYIdPoint: (id: number) => `${API_URL}/finger/get/${id}`,
  // Default
  postDefaultPoint: `${API_URL}/`
}
