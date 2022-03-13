import { useEffect } from "react"
import useSWR from "swr"

const adminAddress = {
    "0xd2caa19ec1e1bb6d06e9666b27bf2e42823d5a6f22c328fdcdee755461615862": true
}

export const handler = (web3, provider) => () => {

    const { data, mutate, ...rest } = useSWR(() =>
        web3 ? "web3/accounts" : null,
        async () => {
            const accounts = await web3.eth.getAccounts()
            return accounts[0]
        }
    )

    useEffect(() => {
        provider &&
            provider.on("accountsChanged",
                accounts => mutate(accounts[0] ?? null)
            )
    }, [provider])

    return {
        data,
        isAdmin: (
            data &&
            adminAddress[web3.utils.keccak256(data)]) ?? false,
        mutate,
        ...rest
    }
}
