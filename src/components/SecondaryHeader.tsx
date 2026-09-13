import Button from "./Button"

function SecondaryHeader() {
    return (
        <header className="bg-gray-800 text-white">
            <div className="flex items-center justify-between px-2 py-2">

                {/* Navigation Secondary Header*/}
                <div className="flex gap-6">
                    <Button label="Character Sheet"></Button>
                    <Button label="Classes & Powers"></Button>
                    <Button label="Definitions & Notes"></Button>
                    <Button label="RP SHEET"></Button>
                </div>
            </div>
        </header>
    )
}

export default SecondaryHeader