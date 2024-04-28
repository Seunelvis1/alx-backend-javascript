/* eslint-disable no-console */
import {uploadPhoto, createUser} from './utils';

export default function handleProfileSignup(){
 const promise = [uploadPhoto(), createUser()]
 return	Promise.all(promises).then((resolve)=>{
console.log(`${resolve[0].body} ${resolve[1].firstName} ${resolve[1].lastName}`);})
   .catch(() => { console.log('Signup system offline'); });

	}

