import Image from 'next/image';
const Page = () => {
    return (
        <div>
            <h1>Events Page</h1>
            <a href=''>
                <Image alt=""/>
                <h2>Events in London</h2>
            </a>
            <a href=''>
                <Image alt=""/>
                <h2>Events in San Francisco</h2>
            </a>
            <a href=''>
                <Image alt=""/>
                <h2>Events in Barcelona</h2>
            </a>
        </div>
    )
}

export default Page;