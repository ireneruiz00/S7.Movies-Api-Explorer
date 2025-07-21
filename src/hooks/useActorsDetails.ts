import { useQuery } from "@tanstack/react-query"
import { getActorsDetails } from "../api/getEndpoints";

export const useActorDetails = (id: string) => {
    return useQuery({
        queryKey: ["actor", id],
        queryFn: () => getActorsDetails(id!),
        enabled: !!id,
    })
}
