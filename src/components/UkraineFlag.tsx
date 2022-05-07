/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

export default function UkraineFlag(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{
                enableBackground: "new 0 0 512 512",
            }}
            xmlSpace="preserve"
            {...props}
        >
            <path
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#ffd500",
                }}
                d="M0 64h512v384H0z"
            />
            <path
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#005bbb",
                }}
                d="M0 64h512v192H0z"
            />
        </svg>
    )
}