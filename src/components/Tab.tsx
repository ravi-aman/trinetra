"use client";

import { Tabs } from "./ui/tabs";

// Define the type for the dummy content data structure
type DummyContentData = {
    [key: string]: {
        videoSrc: string;
    };
};

const dummyContentData: DummyContentData = {
    product: {
        videoSrc: "/media/video1.mp4",
    },
    services: {
        videoSrc: "/media/video2.mp4",
    },
    playground: {
        videoSrc: "/media/video3.mp4",
    },
};


export function TabsDemo() {
    const tabs = [
        {
            title: "Hands on session",
            value: "session",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
                    <p>Hands-on Session</p>
                    <h1 className="text-[19px] text-gray-300 mt-5 font-medium">
                        Gain practical experience through interactive, real-world projects.
                    </h1>
                    <DummyContent tabValue="playground" />
                </div>
            ),
        },
        {
            title: "Live Training",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
                    <p>Live Training</p>
                    <h1 className="text-[19px] text-gray-300 mt-5 font-medium">
                        Engage in live, expert-led training sessions to enhance your skills.
                    </h1>
                    <DummyContent tabValue="playground" />
                </div>
            ),
        },
        {
            title: "Expert Guidance",
            value: "mentor",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
                    <p>Expert Guidance</p>
                    <h1 className="text-[19px] text-gray-300 mt-5 font-medium">
                        Benefit from personalized insights and advice from industry experts.
                    </h1>
                    <DummyContent tabValue="playground" />
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}

interface DummyContentProps {
    tabValue: keyof DummyContentData;
}

const DummyContent: React.FC<DummyContentProps> = ({ tabValue }) => {
    const videoSrc = dummyContentData[tabValue]?.videoSrc || "";

    return (
        <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover object-left-top h-[60%] md:h-[70%] absolute -bottom-10 inset-x-0 w-[90%] rounded-2xl mx-auto"
        />
    );
};
