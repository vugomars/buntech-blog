const ListProducts = () => {
    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 ">
                <div className="aniBtn flex w-full flex-col items-center justify-center bg-secondary">
                    LaunchPad
                </div>
                <div className="aniBtn flex h-full w-full flex-col items-center justify-center bg-secondary">
                    Create Token
                </div>
                <div className="aniBtn flex h-full w-full flex-col items-center justify-center bg-secondary">
                    DEX Swap
                </div>
                <div className="aniBtn flex h-full w-full flex-col items-center justify-center bg-secondary">
                    Game NFT
                </div>
                <div className="aniBtn flex h-full w-full flex-col items-center justify-center bg-secondary">
                    NFT Marketplace
                </div>
                <div className="aniBtn flex h-full w-full flex-col items-center justify-center bg-secondary">
                    WebAssembly
                </div>
                <div className="aniBtn flex h-full w-full flex-col items-center justify-center bg-secondary">
                    DAO
                </div>
                <div className="aniBtn flex h-full w-full flex-col items-center justify-center bg-secondary">
                    Lock Token
                </div>
                <div className="aniBtn flex h-full w-full flex-col items-center justify-center bg-secondary">
                    More
                </div>
            </div>
        </>
    )
}

export default ListProducts
