import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Select = ({brandData, setCompareData}) => {
    const [selectedBrandObject, setSelectedBrandObject] = useState({});
    const [selectedModelObject, setSelectedModelObject] = useState({});
    
    const [models, setModels] = useState([])
    
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [disableModel, setDisableModel] = useState(true);

    const fetchModels = async () => {
        if (selectedBrand) {
            setSelectedBrandObject(prevState => brandData.find(item => item.brand === selectedBrand));
            try {
                const response = await axios.get(`/api/models/${selectedBrand}`);
                setModels(response.data);
                setDisableModel(!disableModel);
            } catch (error) {
                console.log("🚀 ~ file: VehicleButton.jsx:59 ~ handleChange ~ error:", error.message);
            }
        }
    }


    useEffect(() => {
        fetchModels();
        if (selectedModel) {
            setSelectedModelObject(prevState => models.find(item => item.model === selectedModel));
            setCompareData({
                brand: selectedBrand,
                model: selectedModel
            });
        }
    }, [selectedBrand, selectedModel]);

    return (
        <>
        <Listbox name={'brand'} value={selectedBrandObject} onChange={setSelectedBrand}>
            {({ open }) => (
                <>
                <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Listbox.Label>
                    <div className="relative mt-2">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white p-3 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <img src={selectedBrandObject.image} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                <span className="ml-3 block truncate">{selectedBrandObject.brand}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {brandData && brandData.map((item, index) => (
                                    <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                        classNames(
                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                        )
                                        }
                                        value={item.brand}
                                    >
                                        {({ selectedBrand, active }) => (
                                        <>
                                            <div className="flex items-center">
                                            <img src={item.image} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                            <span
                                                className={classNames(item.brand === selectedBrandObject.brand ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                            >
                                                {item.brand}
                                            </span>
                                            </div>

                                            {item.brand === selectedBrandObject.brand ? (
                                            <span
                                                className={classNames(
                                                active ? 'text-white' : 'text-indigo-600',
                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                )}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                            ) : null}
                                        </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>

        <Listbox name={'model'} value={selectedModelObject} disabled={disableModel} onChange={setSelectedModel}>
            {({ open }) => (
                <>
                <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Listbox.Label>
                    <div className="relative mt-2">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white p-3 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <img src={selectedModelObject.image} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                <span className="ml-3 block truncate">{selectedModelObject.model}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {models && models.map((item, index) => (
                                    <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                        classNames(
                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                        )
                                        }
                                        value={item.model}
                                    >
                                        {({ selectedModel, active }) => (
                                        <>
                                            <div className="flex items-center">
                                            <img src={item.image} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                            <span
                                                className={classNames(item.model === selectedModelObject.model ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                            >
                                                {item.model}
                                            </span>
                                            </div>

                                            {item.model === selectedModelObject.model ? (
                                            <span
                                                className={classNames(
                                                active ? 'text-white' : 'text-indigo-600',
                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                )}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                            ) : null}
                                        </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
        
        </>
    )
}

export default Select
