import * as axios from 'axios'

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "api-key": "f52d3515-7d75-4424-90ad-cff5d3559bfc"
    },

})
export const API = {
    getFollowAPI: (userID) => {
        return instance.get(`/follow/${userID}`, {
        }).then(response => {
                return response.data
            })
    },
    unFollowAPI: (id) => {
        return instance.delete(`follow/${id}`, {
        }).then(response => {
            return response.data
        })
    },
    followAPI: (id) => {
        return instance.post(`follow/${id}`, {
        }).then(response => {
            return response.data
        })
    },
    getUserAPI: (p) => {
        return instance.get(`users?page=${p}&count=20`, {
        }).then(response => {
            return response.data
        })
    },
    getUsersAPI: () => {
        return instance.get(`users?count=20`, {
        }).then(response => {
            return response.data
        })
    },
    getUsersAPI: () => {
        return instance.get(`users?count=20`, {
        }).then(response => {
            return response.data
        })
    }
}
export const authUserData = {
    getAuthData: () => {
        return instance.get(`auth/me`, {}).then(response => {
            return response.data
        })
    }
}
export const profileAPI = {
    getUsersProfile: (userid) => {
        return instance.get(`profile/${userid}`)
    },
    updateUserImage: (newImage) => {
        return instance.post(`profile/photo`, newImage, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, { status: status })
    },
    updateProfileData: (newData) => {
        return instance.put(`/profile`, newData )
    },
    getStatus: (userID) => {
        debugger
        return instance.get(`profile/status/` + userID)
    }
}