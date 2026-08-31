import {

    useEffect,
    useMemo,

    useState

} from "react";

import LogsHome from "../../../components/admin/logs/LogsHome";

import * as logsService from "../../../services/logs.service";

export default function Logs() {

    const [logs, setLogs] = useState([]);
    
    const [search, setSearch] = useState("");

const [module, setModule] = useState("");

const [action, setAction] = useState("");

const [status, setStatus] = useState("");

    const [loading, setLoading] = useState(true);

    const filteredLogs = useMemo(() => {

    return logs.filter(log => {

        const matchesSearch =

            log.target
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            log.performedBy?.fullName
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            log.details
                ?.toLowerCase()
                .includes(search.toLowerCase());

        const matchesModule =

            !module ||

            log.module === module;

        const matchesAction =

            !action ||

            log.action === action;

        const matchesStatus =

            !status ||

            log.status === status;

        return (

            matchesSearch &&

            matchesModule &&

            matchesAction &&

            matchesStatus

        );

    });

}, [

    logs,

    search,

    module,

    action,

    status

]);

    const loadLogs = async () => {

        setLoading(true);

        try {

            const data =

                await logsService.getLogs();

            setLogs(data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadLogs();

    }, []);

    return (

        <LogsHome

    logs={filteredLogs}

    loading={loading}

    onRefresh={loadLogs}

    search={search}

    module={module}

    action={action}

    status={status}

    setSearch={setSearch}

    setModule={setModule}

    setAction={setAction}

    setStatus={setStatus}

/>

    );

}