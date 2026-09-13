import Button from "./Button"

function Header() {
    return (
        <header className="bg-gray-900 text-white">
            <div className="flex items-center justify-between px-2 py-6">

                {/* Logo */}
                <div className="text-2xl font-bold">
                    <h1 className="font-bold font-prismatic tracking-[3px]">PRISMATIC WORLDS</h1>
                    <span className="text-sm">Character Sheet
                    </span>
                </div>

                {/* Navigation */}
                <div className="flex gap-6">
                    <Button label="DM Mode"></Button>
                    <Button label="Save"></Button>
                    <Button label="Print/PDF"></Button>
                </div>

            </div>
        </header>
    )
}

export default Header