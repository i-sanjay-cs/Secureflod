import HeadingText from "@/components/heading-text"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { RxActivityLog } from "react-icons/rx"
import { BsFire, BsLayoutTextWindowReverse } from "react-icons/bs"
import { TbDeviceAnalytics } from "react-icons/tb"

function Cards() {
    return (
        <>
            <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary">
                <RxActivityLog className="text-4xl" />
                <CardTitle>Dynamic Behavior Profiling</CardTitle>
                <CardDescription>
                Analyzes the runtime behavior of files and URLs, identifying patterns and anomalies through dynamic analysis to detect and characterize potential malware.tivities, creating a
                    comprehensive progress log.
                </CardDescription>
            </Card>
            <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary">
                <BsFire className="text-4xl" />
                <CardTitle>Static Artifact Identification</CardTitle>
                <CardDescription>
                Examines static attributes of files and URLs, such as file structure, metadata, and known indicators of compromise (IOCs) to provide insights into potential security risks.
                </CardDescription>
            </Card>
            <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary">
                <TbDeviceAnalytics className="text-4xl" />
                <CardTitle>Network Traffic Analysis</CardTitle>
                <CardDescription>
                Monitors and analyzes network activity generated by files and URLs during dynamic analysis, identifying suspicious communication patterns and potential threats.
                </CardDescription>
            </Card>
            <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary">
                <BsLayoutTextWindowReverse className="text-4xl" />
                <CardTitle>Intelligent Threat Detection</CardTitle>
                <CardDescription>
                Employs machine learning algorithms to classify and categorize analysis reports automatically, enhancing the system&apos;s ability to recognize and respond to emerging malware threats.
                </CardDescription>
            </Card>
        </>
    )
}

export default function FeatureCards() {
    return (
        <section className="bg-secondary" id="features">
            <div className="container space-y-8 py-12 text-center lg:py-20">
                <HeadingText subtext="What does Secureflod offer?">Features</HeadingText>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <Cards />
                </div>
            </div>
        </section>
    )
}