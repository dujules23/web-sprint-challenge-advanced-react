// write your custom hook here to control your checkout form
//import use state
import { useLocalStorage } from './useLocalStorage'



export const useForm = (initialValues) => {
    
    //slice of state
     
    const [values, setValues] = useLocalStorage("formValues", initialValues);

    const handleChanges = (e) => {
        console.log('Change event', e.target)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });

    }

  

   

    return[values, handleChanges]
}