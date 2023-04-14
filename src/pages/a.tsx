import { faEye, faReceipt } from '@fortawesome/free-solid-svg-icons'
import photo from '../../public/photo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
export default () => {
    return (
        <main>

            <div className="flex items-center space-x-4 ">
                    <div className="flex-shrink-0">
                        <Image className="w-14 h-14 overflow-hidden rounded-full"  alt="image" src={photo} />

                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Neil Sims - 6 Minutes ago.
                        </p>
                        <p className="text-xl font-medium text-gray-900 my-2 dark:text-white">
                            Why are you a human and animals are animals?
                        </p>
                        <div className="mt-2 flex gap-4">
                            <p className="text-gray-500 text-xs">
                                <FontAwesomeIcon className="text-gray-500 mr-2" icon={faEye} />
                                <span>
                                    46 views
                                </span>
                            </p>
                            <p className="text-gray-500 text-xs">
                                <FontAwesomeIcon className="text-gray-500 mr-2" icon={faReceipt} />
                                <span>
                                    46 answer
                                </span>
                            </p>

                            {/* <FontAwesomeIcon className="text-dark" icon={"fa-solid fa-eye"} /> */}
                        </div>
                    </div>

                </div>
        </main>
    )
}