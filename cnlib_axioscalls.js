import { ref } from 'vue'
import axios from 'axios'
let g_devurl = ''
if (import.meta.env.DEV) {
    g_devurl = 'https://mygolux.lausanne.ch'    
}

export async function getDataUserInfo(groupeSecurite, lesDatas) {
    const urlui = `${g_devurl}/goeland/gestion_spec/g_login_f5.php`
    const params = new URLSearchParams([['groupesecurite', groupeSecurite]])
    const response = await axios.get(urlui, { params })
        .catch(function (error) {
            traiteAxiosError(error, lesDatas)
        })   
    const userInfo = response.data
    lesDatas.user.idEmployeUser = ref(userInfo.id_employe)
    lesDatas.user.nomEmployeUser = ref(userInfo.nom_employe)
    lesDatas.user.prenomEmployeUser = ref(userInfo.prenom_employe)
    lesDatas.user.loginEmployeUser = ref(userInfo.login_employe)
    lesDatas.user.groupeSecurite = ref(userInfo.groupesecurite)
    lesDatas.user.bInGroupe = ref(userInfo.bingroupe)
}

function traiteAxiosError(error) {
    if (error.response) {
        return `${error.response.data}<br>${error.response.status}<br>${error.response.headers}`    
    } else if (error.request.responseText) {
        return error.request.responseText
    } else {
        return error.message
    }
}