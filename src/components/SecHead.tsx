import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "#components/ui/tabs"

function SecHead() {
    return (

        <div className="bg-gray-800  flex items-center justify-between px-2 py-2">
            <Tabs defaultValue="character">
                <TabsList className="h-11 rounded-none bg-transparent flex gap-6">

                    <TabsTrigger value="character">
                        CHARACTER
                    </TabsTrigger>

                    <TabsTrigger value="classes">
                        CLASSES & POWERS
                    </TabsTrigger>

                    <TabsTrigger value="definitions">
                        DEFINITIONS & NOTES
                    </TabsTrigger>

                    <TabsTrigger value="rp-sheet">
                        RP SHEET
                    </TabsTrigger>

                </TabsList>

            </Tabs>
        </div>
    )
}

export default SecHead