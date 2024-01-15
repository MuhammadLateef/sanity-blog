import { createClient } from "next-sanity";

export const client = createClient({
    projectId:"9azjbhwa",
   dataset: "production",
   apiVersion: "2021-10-21",
   useCdn: false 
})