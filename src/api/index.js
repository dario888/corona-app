import axios from 'axios'



export const fetchData = async () => {
   try {
    const res = await axios.get('https://covid19.mathdro.id/api');
    return res
       
   } catch (error) {
       
   }

}


