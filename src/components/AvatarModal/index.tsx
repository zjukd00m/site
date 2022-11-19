export default function AvatarModal() {
    return (
        <div className="modal-container" id="avatar-modal">
            <div className="modal">
                <p className="modal-title"> d00mbat </p>
                <p className="modal-text"> A bat that was generated using the AI dalle 2 and I minted on the polygon chain. </p>
                <img className="modal-close-btn" src="/assets/icons8-close.svg" />
                <img className="avatar-modal-img" height="500" width="500" src="/favicon.png" /> 
                <div className="modal-description">
                    <p className="modal-text"> It was created directly on OpenSea but I'm planning to write the smart contract for it and deploy it on the matic network. </p>
                    <a 
                        href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/86322902810144205852617150587309662080690434118817763483839114517669119787009/"
                        target="_blank"
                        className="avatar-modal-cta"
                    > 
                        OpenSea url
                    </a> 
                </div>
            </div>
        </div>
    )
}
