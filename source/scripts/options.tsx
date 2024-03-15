import React from "react";
import ReactDOM from "react-dom";
import {useForm, SubmitHandler} from "react-hook-form";

import {DEFAULT_INTERVAL_IN_MS, STORAGE_KEY_FOR_INTERVAL} from "./constants";

type Inputs = {
    interval: number;
};

type OptionsProps = {
    interval: number;
};

function Options(props: OptionsProps) {
    const {register, handleSubmit} = useForm<Inputs>({
        defaultValues: {
            interval: props.interval
        }
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        browser.storage.sync.set({
            [STORAGE_KEY_FOR_INTERVAL]: data.interval
        });

        // TODO: display a success message
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="number" {...register("interval")} />
        </form>
    );
}

(async () => {
    // TODO: handle an error getting the value
    const settings = await browser.storage.sync.get(STORAGE_KEY_FOR_INTERVAL);
    const interval = settings.interval ?? DEFAULT_INTERVAL_IN_MS;

    const options = <Options interval={interval} />;
    ReactDOM.render(options, document.getElementById("root"));
})();
