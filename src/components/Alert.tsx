import clsx from "clsx";

export default function Alert({ msg, success }: Alert) {

    return (
        <div className={clsx('rounded-md text-white font-medium py-2 px-3', {
            'bg-red-500': !success,
            'bg-green-400': success
        })} >
            {msg}
        </div>
    )

}