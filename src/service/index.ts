import axios from 'axios'

export const contactSend = axios.create({
    baseURL: 'https://webhook.site/e0eb745b-8925-476f-835e-f4f0489e9761'
})

export const getData = axios.create({
    baseURL: 'https://accenture-server-rn.herokuapp.com/'
})