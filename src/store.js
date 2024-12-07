import {create} from 'zustand';

const store = (set,get) => ({
jobs: [],
filteredJobs: [],
setJobs: (data) => set({jobs :data,filteredJobs: data}),
filterJobs: (data)=> set({filteredJobs: data}),
fetchJobs: async()=>{
    try{
        const response= await fetch('/data.json');
        if(!response.ok){
            console.log('Error fetching the data')
        }
        const data = await response.json();
        if(data){
            get().setJobs(data)
        }
    }
    catch(error){
        console.error('Error:', error)
    }
},
handleFilter: (filter)=>{
    const filtered = get().jobs.filter((job) =>{
        return job.languages.includes(filter)
    })
    get().filterJobs(filtered)
}
})

export const useStore = create(store);