import axios from 'axios'

export const getAllJobs = () =>{
    return axios.post('job/getall')
    .then(res=> {
        return res.data
    }).catch( err=> {
        console.log(err)
    })
}

export const getLastJob = () =>{
    return axios.post('job/getlast')
    .then(res=> {
        return res.data
    }).catch( err=> {
        console.log(err)
    })
}

export const updateJob = ( id, date, move ) =>{
    return axios.post('job/edit',
        {
            date: date,
            move: move,
            id: id
        }
    )
    .then().catch(err => console.log(err))
}

export const deleteJob = ( id ) =>{
    return axios.post('job/delete',{
        id: id
    })
    .then().catch(err => console.log(err))
}
export const createJob = ( date, move ) =>{
    return axios.post('job/create',
        {
            date: date,
            move: move,
        }
    )
    .then().catch(err => console.log(err))
}

