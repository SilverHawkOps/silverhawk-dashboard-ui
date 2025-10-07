import CPUChart from "./CPU";
import MemoryChart from "./MemoryChart";
import NetworkTrafficChart from "./NetworkTrafficChart";
import StorageChart from "./StorageChart";
const data = [
    {
        "timestamp": "2025-10-07T05:31:42.321Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "6.41",
            "perCore": [
                {
                    "load": "6.76",
                    "loadUser": "5.20",
                    "loadSystem": "1.32",
                    "loadIdle": "93.24"
                },
                {
                    "load": "6.39",
                    "loadUser": "4.88",
                    "loadSystem": "1.30",
                    "loadIdle": "93.61"
                },
                {
                    "load": "6.35",
                    "loadUser": "4.47",
                    "loadSystem": "1.56",
                    "loadIdle": "93.65"
                },
                {
                    "load": "6.73",
                    "loadUser": "5.12",
                    "loadSystem": "1.27",
                    "loadIdle": "93.27"
                },
                {
                    "load": "6.18",
                    "loadUser": "4.66",
                    "loadSystem": "1.32",
                    "loadIdle": "93.82"
                },
                {
                    "load": "6.40",
                    "loadUser": "4.87",
                    "loadSystem": "1.33",
                    "loadIdle": "93.60"
                },
                {
                    "load": "6.56",
                    "loadUser": "4.78",
                    "loadSystem": "1.46",
                    "loadIdle": "93.44"
                },
                {
                    "load": "5.93",
                    "loadUser": "4.39",
                    "loadSystem": "1.39",
                    "loadIdle": "94.07"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.58" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99475075, "tx_bytes": 7026988 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:31:47.378Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "2.45",
            "perCore": [
                {
                    "load": "2.58",
                    "loadUser": "1.79",
                    "loadSystem": "0.80",
                    "loadIdle": "97.42"
                },
                {
                    "load": "2.46",
                    "loadUser": "2.05",
                    "loadSystem": "0.41",
                    "loadIdle": "97.54"
                },
                {
                    "load": "2.41",
                    "loadUser": "1.41",
                    "loadSystem": "1.00",
                    "loadIdle": "97.59"
                },
                {
                    "load": "1.99",
                    "loadUser": "1.59",
                    "loadSystem": "0.40",
                    "loadIdle": "98.01"
                },
                {
                    "load": "4.01",
                    "loadUser": "3.41",
                    "loadSystem": "0.60",
                    "loadIdle": "95.99"
                },
                {
                    "load": "2.39",
                    "loadUser": "1.79",
                    "loadSystem": "0.60",
                    "loadIdle": "97.61"
                },
                {
                    "load": "1.99",
                    "loadUser": "1.19",
                    "loadSystem": "0.80",
                    "loadIdle": "98.01"
                },
                {
                    "load": "1.80",
                    "loadUser": "1.00",
                    "loadSystem": "0.80",
                    "loadIdle": "98.20"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.62" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99479210, "tx_bytes": 7027471 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:31:52.429Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "4.29",
            "perCore": [
                {
                    "load": "3.62",
                    "loadUser": "2.62",
                    "loadSystem": "1.01",
                    "loadIdle": "96.38"
                },
                {
                    "load": "6.51",
                    "loadUser": "5.88",
                    "loadSystem": "0.63",
                    "loadIdle": "93.49"
                },
                {
                    "load": "6.40",
                    "loadUser": "5.00",
                    "loadSystem": "1.40",
                    "loadIdle": "93.60"
                },
                {
                    "load": "3.41",
                    "loadUser": "2.81",
                    "loadSystem": "0.60",
                    "loadIdle": "96.59"
                },
                {
                    "load": "2.82",
                    "loadUser": "2.22",
                    "loadSystem": "0.60",
                    "loadIdle": "97.18"
                },
                {
                    "load": "3.04",
                    "loadUser": "2.43",
                    "loadSystem": "0.61",
                    "loadIdle": "96.96"
                },
                {
                    "load": "4.79",
                    "loadUser": "3.59",
                    "loadSystem": "1.20",
                    "loadIdle": "95.21"
                },
                {
                    "load": "3.79",
                    "loadUser": "2.79",
                    "loadSystem": "1.00",
                    "loadIdle": "96.21"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.62" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 119483167, "tx_bytes": 80351411 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:31:57.483Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "13.25",
            "perCore": [
                {
                    "load": "11.47",
                    "loadUser": "8.85",
                    "loadSystem": "2.62",
                    "loadIdle": "88.53"
                },
                {
                    "load": "14.63",
                    "loadUser": "12.80",
                    "loadSystem": "1.83",
                    "loadIdle": "85.37"
                },
                {
                    "load": "18.27",
                    "loadUser": "16.27",
                    "loadSystem": "2.01",
                    "loadIdle": "81.73"
                },
                {
                    "load": "12.40",
                    "loadUser": "10.37",
                    "loadSystem": "2.03",
                    "loadIdle": "87.60"
                },
                {
                    "load": "12.97",
                    "loadUser": "11.18",
                    "loadSystem": "1.80",
                    "loadIdle": "87.03"
                },
                {
                    "load": "15.83",
                    "loadUser": "13.63",
                    "loadSystem": "2.20",
                    "loadIdle": "84.17"
                },
                {
                    "load": "9.74",
                    "loadUser": "7.91",
                    "loadSystem": "1.83",
                    "loadIdle": "90.26"
                },
                {
                    "load": "10.56",
                    "loadUser": "8.70",
                    "loadSystem": "1.86",
                    "loadIdle": "89.44"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.73" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99528990, "tx_bytes": 7117466 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:32:05.940Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "6.49",
            "perCore": [
                {
                    "load": "6.80",
                    "loadUser": "5.24",
                    "loadSystem": "1.33",
                    "loadIdle": "93.20"
                },
                {
                    "load": "6.49",
                    "loadUser": "4.99",
                    "loadSystem": "1.30",
                    "loadIdle": "93.51"
                },
                {
                    "load": "6.49",
                    "loadUser": "4.62",
                    "loadSystem": "1.57",
                    "loadIdle": "93.51"
                },
                {
                    "load": "6.77",
                    "loadUser": "5.18",
                    "loadSystem": "1.27",
                    "loadIdle": "93.23"
                },
                {
                    "load": "6.27",
                    "loadUser": "4.76",
                    "loadSystem": "1.31",
                    "loadIdle": "93.73"
                },
                {
                    "load": "6.50",
                    "loadUser": "4.97",
                    "loadSystem": "1.34",
                    "loadIdle": "93.50"
                },
                {
                    "load": "6.60",
                    "loadUser": "4.83",
                    "loadSystem": "1.46",
                    "loadIdle": "93.40"
                },
                {
                    "load": "6.02",
                    "loadUser": "4.49",
                    "loadSystem": "1.39",
                    "loadIdle": "93.98"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.75" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 89593855, "tx_bytes": 55242072 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:32:10.992Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "3.12",
            "perCore": [
                {
                    "load": "4.39",
                    "loadUser": "3.99",
                    "loadSystem": "0.40",
                    "loadIdle": "95.61"
                },
                {
                    "load": "3.09",
                    "loadUser": "2.26",
                    "loadSystem": "0.82",
                    "loadIdle": "96.91"
                },
                {
                    "load": "2.83",
                    "loadUser": "1.62",
                    "loadSystem": "1.21",
                    "loadIdle": "97.17"
                },
                {
                    "load": "2.79",
                    "loadUser": "2.19",
                    "loadSystem": "0.60",
                    "loadIdle": "97.21"
                },
                {
                    "load": "3.23",
                    "loadUser": "2.63",
                    "loadSystem": "0.61",
                    "loadIdle": "96.77"
                },
                {
                    "load": "2.59",
                    "loadUser": "2.20",
                    "loadSystem": "0.40",
                    "loadIdle": "97.41"
                },
                {
                    "load": "3.00",
                    "loadUser": "2.20",
                    "loadSystem": "0.80",
                    "loadIdle": "97.00"
                },
                {
                    "load": "3.01",
                    "loadUser": "2.40",
                    "loadSystem": "0.60",
                    "loadIdle": "96.99"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.77" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99621151, "tx_bytes": 7337530 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:32:16.057Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "3.51",
            "perCore": [
                {
                    "load": "2.81",
                    "loadUser": "2.00",
                    "loadSystem": "0.80",
                    "loadIdle": "97.19"
                },
                {
                    "load": "3.11",
                    "loadUser": "2.28",
                    "loadSystem": "0.83",
                    "loadIdle": "96.89"
                },
                {
                    "load": "3.39",
                    "loadUser": "2.39",
                    "loadSystem": "1.00",
                    "loadIdle": "96.61"
                },
                {
                    "load": "3.39",
                    "loadUser": "2.79",
                    "loadSystem": "0.60",
                    "loadIdle": "96.61"
                },
                {
                    "load": "3.36",
                    "loadUser": "2.57",
                    "loadSystem": "0.79",
                    "loadIdle": "96.64"
                },
                {
                    "load": "5.17",
                    "loadUser": "4.57",
                    "loadSystem": "0.60",
                    "loadIdle": "94.83"
                },
                {
                    "load": "3.82",
                    "loadUser": "3.22",
                    "loadSystem": "0.60",
                    "loadIdle": "96.18"
                },
                {
                    "load": "3.03",
                    "loadUser": "2.22",
                    "loadSystem": "0.81",
                    "loadIdle": "96.97"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.71" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99629033, "tx_bytes": 7341385 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:32:21.131Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "2.54",
            "perCore": [
                {
                    "load": "2.59",
                    "loadUser": "1.80",
                    "loadSystem": "0.80",
                    "loadIdle": "97.41"
                },
                {
                    "load": "2.32",
                    "loadUser": "1.90",
                    "loadSystem": "0.42",
                    "loadIdle": "97.68"
                },
                {
                    "load": "2.62",
                    "loadUser": "1.61",
                    "loadSystem": "1.01",
                    "loadIdle": "97.38"
                },
                {
                    "load": "1.39",
                    "loadUser": "0.80",
                    "loadSystem": "0.60",
                    "loadIdle": "98.61"
                },
                {
                    "load": "2.58",
                    "loadUser": "1.79",
                    "loadSystem": "0.79",
                    "loadIdle": "97.42"
                },
                {
                    "load": "4.15",
                    "loadUser": "3.16",
                    "loadSystem": "0.99",
                    "loadIdle": "95.85"
                },
                {
                    "load": "2.59",
                    "loadUser": "1.99",
                    "loadSystem": "0.60",
                    "loadIdle": "97.41"
                },
                {
                    "load": "2.02",
                    "loadUser": "1.42",
                    "loadSystem": "0.61",
                    "loadIdle": "97.98"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.74" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 97891406, "tx_bytes": 73544814 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:32:26.204Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "4.45",
            "perCore": [
                {
                    "load": "4.41",
                    "loadUser": "3.21",
                    "loadSystem": "1.20",
                    "loadIdle": "95.59"
                },
                {
                    "load": "4.59",
                    "loadUser": "3.55",
                    "loadSystem": "1.04",
                    "loadIdle": "95.41"
                },
                {
                    "load": "3.42",
                    "loadUser": "2.21",
                    "loadSystem": "1.21",
                    "loadIdle": "96.58"
                },
                {
                    "load": "3.58",
                    "loadUser": "2.78",
                    "loadSystem": "0.80",
                    "loadIdle": "96.42"
                },
                {
                    "load": "4.62",
                    "loadUser": "3.21",
                    "loadSystem": "1.41",
                    "loadIdle": "95.38"
                },
                {
                    "load": "3.42",
                    "loadUser": "3.02",
                    "loadSystem": "0.40",
                    "loadIdle": "96.58"
                },
                {
                    "load": "4.60",
                    "loadUser": "3.40",
                    "loadSystem": "1.20",
                    "loadIdle": "95.40"
                },
                {
                    "load": "6.96",
                    "loadUser": "5.57",
                    "loadSystem": "1.39",
                    "loadIdle": "93.04"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.75" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99632724, "tx_bytes": 7347942 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:32:31.280Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "2.79",
            "perCore": [
                {
                    "load": "4.56",
                    "loadUser": "3.77",
                    "loadSystem": "0.79",
                    "loadIdle": "95.44"
                },
                {
                    "load": "2.01",
                    "loadUser": "1.41",
                    "loadSystem": "0.60",
                    "loadIdle": "97.99"
                },
                {
                    "load": "3.37",
                    "loadUser": "2.57",
                    "loadSystem": "0.79",
                    "loadIdle": "96.63"
                },
                {
                    "load": "2.97",
                    "loadUser": "2.18",
                    "loadSystem": "0.79",
                    "loadIdle": "97.03"
                },
                {
                    "load": "2.57",
                    "loadUser": "1.39",
                    "loadSystem": "1.19",
                    "loadIdle": "97.43"
                },
                {
                    "load": "2.40",
                    "loadUser": "1.40",
                    "loadSystem": "1.00",
                    "loadIdle": "97.60"
                },
                {
                    "load": "2.19",
                    "loadUser": "1.39",
                    "loadSystem": "0.80",
                    "loadIdle": "97.81"
                },
                {
                    "load": "2.23",
                    "loadUser": "1.42",
                    "loadSystem": "0.81",
                    "loadIdle": "97.77"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.74" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99643283, "tx_bytes": 7365924 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:32:36.350Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "2.64",
            "perCore": [
                {
                    "load": "3.98",
                    "loadUser": "3.38",
                    "loadSystem": "0.60",
                    "loadIdle": "96.02"
                },
                {
                    "load": "3.64",
                    "loadUser": "2.63",
                    "loadSystem": "1.01",
                    "loadIdle": "96.36"
                },
                {
                    "load": "2.58",
                    "loadUser": "1.99",
                    "loadSystem": "0.60",
                    "loadIdle": "97.42"
                },
                {
                    "load": "2.00",
                    "loadUser": "1.20",
                    "loadSystem": "0.80",
                    "loadIdle": "98.00"
                },
                {
                    "load": "2.19",
                    "loadUser": "1.39",
                    "loadSystem": "0.80",
                    "loadIdle": "97.81"
                },
                {
                    "load": "1.78",
                    "loadUser": "0.99",
                    "loadSystem": "0.79",
                    "loadIdle": "98.22"
                },
                {
                    "load": "2.58",
                    "loadUser": "1.79",
                    "loadSystem": "0.79",
                    "loadIdle": "97.42"
                },
                {
                    "load": "2.40",
                    "loadUser": "1.60",
                    "loadSystem": "0.80",
                    "loadIdle": "97.60"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.72" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99662337, "tx_bytes": 7387302 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:32:41.422Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "3.94",
            "perCore": [
                {
                    "load": "4.58",
                    "loadUser": "3.78",
                    "loadSystem": "0.80",
                    "loadIdle": "95.42"
                },
                {
                    "load": "4.99",
                    "loadUser": "4.16",
                    "loadSystem": "0.83",
                    "loadIdle": "95.01"
                },
                {
                    "load": "2.84",
                    "loadUser": "1.62",
                    "loadSystem": "1.22",
                    "loadIdle": "97.16"
                },
                {
                    "load": "3.39",
                    "loadUser": "2.79",
                    "loadSystem": "0.60",
                    "loadIdle": "96.61"
                },
                {
                    "load": "3.59",
                    "loadUser": "2.99",
                    "loadSystem": "0.60",
                    "loadIdle": "96.41"
                },
                {
                    "load": "3.96",
                    "loadUser": "3.17",
                    "loadSystem": "0.79",
                    "loadIdle": "96.04"
                },
                {
                    "load": "4.39",
                    "loadUser": "2.99",
                    "loadSystem": "1.40",
                    "loadIdle": "95.61"
                },
                {
                    "load": "3.80",
                    "loadUser": "2.80",
                    "loadSystem": "1.00",
                    "loadIdle": "96.20"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.75" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99665578, "tx_bytes": 7399601 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:32:46.496Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "2.29",
            "perCore": [
                {
                    "load": "2.19",
                    "loadUser": "1.20",
                    "loadSystem": "1.00",
                    "loadIdle": "97.81"
                },
                {
                    "load": "3.59",
                    "loadUser": "3.19",
                    "loadSystem": "0.40",
                    "loadIdle": "96.41"
                },
                {
                    "load": "1.61",
                    "loadUser": "1.00",
                    "loadSystem": "0.60",
                    "loadIdle": "98.39"
                },
                {
                    "load": "2.20",
                    "loadUser": "1.40",
                    "loadSystem": "0.80",
                    "loadIdle": "97.80"
                },
                {
                    "load": "1.98",
                    "loadUser": "1.39",
                    "loadSystem": "0.60",
                    "loadIdle": "98.02"
                },
                {
                    "load": "2.18",
                    "loadUser": "1.59",
                    "loadSystem": "0.60",
                    "loadIdle": "97.82"
                },
                {
                    "load": "1.98",
                    "loadUser": "1.19",
                    "loadSystem": "0.79",
                    "loadIdle": "98.02"
                },
                {
                    "load": "2.58",
                    "loadUser": "1.39",
                    "loadSystem": "1.19",
                    "loadIdle": "97.42"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.76" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99671173, "tx_bytes": 7409347 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:32:51.569Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "2.64",
            "perCore": [
                {
                    "load": "5.37",
                    "loadUser": "4.57",
                    "loadSystem": "0.80",
                    "loadIdle": "94.63"
                },
                {
                    "load": "1.83",
                    "loadUser": "1.01",
                    "loadSystem": "0.81",
                    "loadIdle": "98.17"
                },
                {
                    "load": "2.61",
                    "loadUser": "1.80",
                    "loadSystem": "0.80",
                    "loadIdle": "97.39"
                },
                {
                    "load": "1.59",
                    "loadUser": "1.20",
                    "loadSystem": "0.40",
                    "loadIdle": "98.41"
                },
                {
                    "load": "3.17",
                    "loadUser": "2.38",
                    "loadSystem": "0.79",
                    "loadIdle": "96.83"
                },
                {
                    "load": "1.98",
                    "loadUser": "1.59",
                    "loadSystem": "0.40",
                    "loadIdle": "98.02"
                },
                {
                    "load": "2.38",
                    "loadUser": "1.39",
                    "loadSystem": "0.99",
                    "loadIdle": "97.62"
                },
                {
                    "load": "2.20",
                    "loadUser": "1.20",
                    "loadSystem": "1.00",
                    "loadIdle": "97.80"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.74" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99672689, "tx_bytes": 7410098 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:32:56.641Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "0.97",
            "perCore": [
                {
                    "load": "0.80",
                    "loadUser": "0.60",
                    "loadSystem": "0.20",
                    "loadIdle": "99.20"
                },
                {
                    "load": "1.39",
                    "loadUser": "0.60",
                    "loadSystem": "0.80",
                    "loadIdle": "98.61"
                },
                {
                    "load": "0.80",
                    "loadUser": "0.20",
                    "loadSystem": "0.60",
                    "loadIdle": "99.20"
                },
                {
                    "load": "0.99",
                    "loadUser": "0.40",
                    "loadSystem": "0.59",
                    "loadIdle": "99.01"
                },
                {
                    "load": "1.19",
                    "loadUser": "0.60",
                    "loadSystem": "0.60",
                    "loadIdle": "98.81"
                },
                {
                    "load": "0.79",
                    "loadUser": "0.40",
                    "loadSystem": "0.40",
                    "loadIdle": "99.21"
                },
                {
                    "load": "0.99",
                    "loadUser": "0.59",
                    "loadSystem": "0.40",
                    "loadIdle": "99.01"
                },
                {
                    "load": "0.80",
                    "loadUser": "0.40",
                    "loadSystem": "0.40",
                    "loadIdle": "99.20"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.75" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99674699, "tx_bytes": 7410678 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:33:01.716Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "1.31",
            "perCore": [
                {
                    "load": "1.98",
                    "loadUser": "1.58",
                    "loadSystem": "0.40",
                    "loadIdle": "98.02"
                },
                {
                    "load": "1.38",
                    "loadUser": "0.79",
                    "loadSystem": "0.59",
                    "loadIdle": "98.62"
                },
                {
                    "load": "1.79",
                    "loadUser": "0.99",
                    "loadSystem": "0.80",
                    "loadIdle": "98.21"
                },
                {
                    "load": "0.79",
                    "loadUser": "0.40",
                    "loadSystem": "0.40",
                    "loadIdle": "99.21"
                },
                {
                    "load": "1.41",
                    "loadUser": "0.60",
                    "loadSystem": "0.80",
                    "loadIdle": "98.59"
                },
                {
                    "load": "0.99",
                    "loadUser": "0.79",
                    "loadSystem": "0.20",
                    "loadIdle": "99.01"
                },
                {
                    "load": "1.19",
                    "loadUser": "0.79",
                    "loadSystem": "0.40",
                    "loadIdle": "98.81"
                },
                {
                    "load": "0.99",
                    "loadUser": "0.40",
                    "loadSystem": "0.60",
                    "loadIdle": "99.01"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.73" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99676365, "tx_bytes": 7411583 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:33:06.786Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "1.17",
            "perCore": [
                {
                    "load": "1.58",
                    "loadUser": "0.99",
                    "loadSystem": "0.59",
                    "loadIdle": "98.42"
                },
                {
                    "load": "1.78",
                    "loadUser": "0.99",
                    "loadSystem": "0.79",
                    "loadIdle": "98.22"
                },
                {
                    "load": "0.80",
                    "loadUser": "0.60",
                    "loadSystem": "0.20",
                    "loadIdle": "99.20"
                },
                {
                    "load": "1.19",
                    "loadUser": "0.59",
                    "loadSystem": "0.59",
                    "loadIdle": "98.81"
                },
                {
                    "load": "1.00",
                    "loadUser": "0.40",
                    "loadSystem": "0.60",
                    "loadIdle": "99.00"
                },
                {
                    "load": "0.99",
                    "loadUser": "0.79",
                    "loadSystem": "0.20",
                    "loadIdle": "99.01"
                },
                {
                    "load": "1.19",
                    "loadUser": "0.59",
                    "loadSystem": "0.59",
                    "loadIdle": "98.81"
                },
                {
                    "load": "0.80",
                    "loadUser": "0.60",
                    "loadSystem": "0.20",
                    "loadIdle": "99.20"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.73" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99687459, "tx_bytes": 7422676 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:33:11.863Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "3.21",
            "perCore": [
                {
                    "load": "3.39",
                    "loadUser": "2.59",
                    "loadSystem": "0.80",
                    "loadIdle": "96.61"
                },
                {
                    "load": "2.99",
                    "loadUser": "1.80",
                    "loadSystem": "1.20",
                    "loadIdle": "97.01"
                },
                {
                    "load": "3.37",
                    "loadUser": "2.38",
                    "loadSystem": "0.99",
                    "loadIdle": "96.63"
                },
                {
                    "load": "2.38",
                    "loadUser": "1.79",
                    "loadSystem": "0.60",
                    "loadIdle": "97.62"
                },
                {
                    "load": "3.62",
                    "loadUser": "3.22",
                    "loadSystem": "0.40",
                    "loadIdle": "96.38"
                },
                {
                    "load": "3.40",
                    "loadUser": "3.00",
                    "loadSystem": "0.40",
                    "loadIdle": "96.60"
                },
                {
                    "load": "3.37",
                    "loadUser": "2.77",
                    "loadSystem": "0.59",
                    "loadIdle": "96.63"
                },
                {
                    "load": "3.18",
                    "loadUser": "2.39",
                    "loadSystem": "0.80",
                    "loadIdle": "96.82"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.77" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99700646, "tx_bytes": 7434353 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:33:16.938Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "5.89",
            "perCore": [
                {
                    "load": "6.37",
                    "loadUser": "5.18",
                    "loadSystem": "1.20",
                    "loadIdle": "93.63"
                },
                {
                    "load": "8.70",
                    "loadUser": "7.25",
                    "loadSystem": "1.45",
                    "loadIdle": "91.30"
                },
                {
                    "load": "6.05",
                    "loadUser": "4.23",
                    "loadSystem": "1.81",
                    "loadIdle": "93.95"
                },
                {
                    "load": "4.37",
                    "loadUser": "3.37",
                    "loadSystem": "0.99",
                    "loadIdle": "95.63"
                },
                {
                    "load": "5.98",
                    "loadUser": "4.78",
                    "loadSystem": "1.20",
                    "loadIdle": "94.02"
                },
                {
                    "load": "5.14",
                    "loadUser": "4.15",
                    "loadSystem": "0.99",
                    "loadIdle": "94.86"
                },
                {
                    "load": "5.03",
                    "loadUser": "3.62",
                    "loadSystem": "1.41",
                    "loadIdle": "94.97"
                },
                {
                    "load": "5.58",
                    "loadUser": "4.58",
                    "loadSystem": "1.00",
                    "loadIdle": "94.42"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.80" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99707889, "tx_bytes": 7448094 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:33:22.014Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "3.77",
            "perCore": [
                {
                    "load": "3.97",
                    "loadUser": "3.17",
                    "loadSystem": "0.79",
                    "loadIdle": "96.03"
                },
                {
                    "load": "3.06",
                    "loadUser": "2.45",
                    "loadSystem": "0.61",
                    "loadIdle": "96.94"
                },
                {
                    "load": "3.78",
                    "loadUser": "2.78",
                    "loadSystem": "0.99",
                    "loadIdle": "96.22"
                },
                {
                    "load": "2.58",
                    "loadUser": "1.79",
                    "loadSystem": "0.79",
                    "loadIdle": "97.42"
                },
                {
                    "load": "3.77",
                    "loadUser": "2.98",
                    "loadSystem": "0.79",
                    "loadIdle": "96.23"
                },
                {
                    "load": "5.15",
                    "loadUser": "4.16",
                    "loadSystem": "0.99",
                    "loadIdle": "94.85"
                },
                {
                    "load": "4.17",
                    "loadUser": "3.17",
                    "loadSystem": "0.99",
                    "loadIdle": "95.83"
                },
                {
                    "load": "3.64",
                    "loadUser": "2.42",
                    "loadSystem": "1.21",
                    "loadIdle": "96.36"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.77" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.22" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 99732144, "tx_bytes": 7475863 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:35:50.821Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "6.09",
            "perCore": [
                {
                    "load": "6.29",
                    "loadUser": "4.91",
                    "loadSystem": "1.21",
                    "loadIdle": "93.71"
                },
                {
                    "load": "6.10",
                    "loadUser": "4.75",
                    "loadSystem": "1.20",
                    "loadIdle": "93.90"
                },
                {
                    "load": "6.13",
                    "loadUser": "4.47",
                    "loadSystem": "1.44",
                    "loadIdle": "93.87"
                },
                {
                    "load": "6.45",
                    "loadUser": "4.76",
                    "loadSystem": "1.16",
                    "loadIdle": "93.55"
                },
                {
                    "load": "5.86",
                    "loadUser": "4.53",
                    "loadSystem": "1.18",
                    "loadIdle": "94.14"
                },
                {
                    "load": "6.15",
                    "loadUser": "4.80",
                    "loadSystem": "1.20",
                    "loadIdle": "93.85"
                },
                {
                    "load": "6.04",
                    "loadUser": "4.46",
                    "loadSystem": "1.35",
                    "loadIdle": "93.96"
                },
                {
                    "load": "5.72",
                    "loadUser": "4.33",
                    "loadSystem": "1.29",
                    "loadIdle": "94.28"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.69" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.21" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 100250212, "tx_bytes": 8238826 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:35:55.899Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "3.28",
            "perCore": [
                {
                    "load": "2.20",
                    "loadUser": "1.40",
                    "loadSystem": "0.80",
                    "loadIdle": "97.80"
                },
                {
                    "load": "3.52",
                    "loadUser": "1.66",
                    "loadSystem": "1.86",
                    "loadIdle": "96.48"
                },
                {
                    "load": "3.59",
                    "loadUser": "2.00",
                    "loadSystem": "1.60",
                    "loadIdle": "96.41"
                },
                {
                    "load": "2.58",
                    "loadUser": "2.19",
                    "loadSystem": "0.40",
                    "loadIdle": "97.42"
                },
                {
                    "load": "2.43",
                    "loadUser": "1.42",
                    "loadSystem": "1.01",
                    "loadIdle": "97.57"
                },
                {
                    "load": "4.17",
                    "loadUser": "3.57",
                    "loadSystem": "0.60",
                    "loadIdle": "95.83"
                },
                {
                    "load": "3.18",
                    "loadUser": "2.19",
                    "loadSystem": "0.99",
                    "loadIdle": "96.82"
                },
                {
                    "load": "4.56",
                    "loadUser": "3.57",
                    "loadSystem": "0.99",
                    "loadIdle": "95.44"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.67" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.21" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 100260349, "tx_bytes": 8250744 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:36:00.956Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "4.03",
            "perCore": [
                {
                    "load": "3.62",
                    "loadUser": "2.41",
                    "loadSystem": "1.21",
                    "loadIdle": "96.38"
                },
                {
                    "load": "2.74",
                    "loadUser": "2.11",
                    "loadSystem": "0.63",
                    "loadIdle": "97.26"
                },
                {
                    "load": "4.80",
                    "loadUser": "3.60",
                    "loadSystem": "1.20",
                    "loadIdle": "95.20"
                },
                {
                    "load": "3.78",
                    "loadUser": "2.98",
                    "loadSystem": "0.80",
                    "loadIdle": "96.22"
                },
                {
                    "load": "6.29",
                    "loadUser": "5.88",
                    "loadSystem": "0.41",
                    "loadIdle": "93.71"
                },
                {
                    "load": "3.39",
                    "loadUser": "2.40",
                    "loadSystem": "1.00",
                    "loadIdle": "96.61"
                },
                {
                    "load": "4.19",
                    "loadUser": "3.59",
                    "loadSystem": "0.60",
                    "loadIdle": "95.81"
                },
                {
                    "load": "3.41",
                    "loadUser": "2.61",
                    "loadSystem": "0.80",
                    "loadIdle": "96.59"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.68" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.21" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 100261765, "tx_bytes": 8257796 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:36:06.031Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "1.86",
            "perCore": [
                {
                    "load": "1.41",
                    "loadUser": "1.01",
                    "loadSystem": "0.40",
                    "loadIdle": "98.59"
                },
                {
                    "load": "1.69",
                    "loadUser": "1.06",
                    "loadSystem": "0.64",
                    "loadIdle": "98.31"
                },
                {
                    "load": "4.01",
                    "loadUser": "2.81",
                    "loadSystem": "1.20",
                    "loadIdle": "95.99"
                },
                {
                    "load": "1.59",
                    "loadUser": "0.99",
                    "loadSystem": "0.60",
                    "loadIdle": "98.41"
                },
                {
                    "load": "1.59",
                    "loadUser": "0.99",
                    "loadSystem": "0.60",
                    "loadIdle": "98.41"
                },
                {
                    "load": "1.39",
                    "loadUser": "0.79",
                    "loadSystem": "0.60",
                    "loadIdle": "98.61"
                },
                {
                    "load": "2.21",
                    "loadUser": "1.41",
                    "loadSystem": "0.80",
                    "loadIdle": "97.79"
                },
                {
                    "load": "0.99",
                    "loadUser": "0.79",
                    "loadSystem": "0.20",
                    "loadIdle": "99.01"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.68" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.21" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 100278366, "tx_bytes": 8269152 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:36:11.093Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "5.80",
            "perCore": [
                {
                    "load": "6.97",
                    "loadUser": "6.18",
                    "loadSystem": "0.80",
                    "loadIdle": "93.03"
                },
                {
                    "load": "6.57",
                    "loadUser": "5.54",
                    "loadSystem": "1.03",
                    "loadIdle": "93.43"
                },
                {
                    "load": "4.88",
                    "loadUser": "3.25",
                    "loadSystem": "1.63",
                    "loadIdle": "95.12"
                },
                {
                    "load": "5.99",
                    "loadUser": "4.99",
                    "loadSystem": "1.00",
                    "loadIdle": "94.01"
                },
                {
                    "load": "5.37",
                    "loadUser": "3.98",
                    "loadSystem": "1.39",
                    "loadIdle": "94.63"
                },
                {
                    "load": "4.39",
                    "loadUser": "3.59",
                    "loadSystem": "0.80",
                    "loadIdle": "95.61"
                },
                {
                    "load": "6.29",
                    "loadUser": "5.48",
                    "loadSystem": "0.81",
                    "loadIdle": "93.71"
                },
                {
                    "load": "5.94",
                    "loadUser": "4.75",
                    "loadSystem": "1.19",
                    "loadIdle": "94.06"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.69" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.21" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 100287730, "tx_bytes": 8285991 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:36:16.162Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "3.51",
            "perCore": [
                {
                    "load": "2.99",
                    "loadUser": "1.60",
                    "loadSystem": "1.40",
                    "loadIdle": "97.01"
                },
                {
                    "load": "8.06",
                    "loadUser": "7.06",
                    "loadSystem": "1.01",
                    "loadIdle": "91.94"
                },
                {
                    "load": "2.83",
                    "loadUser": "2.02",
                    "loadSystem": "0.81",
                    "loadIdle": "97.17"
                },
                {
                    "load": "3.01",
                    "loadUser": "2.61",
                    "loadSystem": "0.40",
                    "loadIdle": "96.99"
                },
                {
                    "load": "3.60",
                    "loadUser": "2.80",
                    "loadSystem": "0.80",
                    "loadIdle": "96.40"
                },
                {
                    "load": "1.79",
                    "loadUser": "1.39",
                    "loadSystem": "0.40",
                    "loadIdle": "98.21"
                },
                {
                    "load": "2.59",
                    "loadUser": "1.59",
                    "loadSystem": "1.00",
                    "loadIdle": "97.41"
                },
                {
                    "load": "3.20",
                    "loadUser": "2.00",
                    "loadSystem": "1.20",
                    "loadIdle": "96.80"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.67" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.21" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 100300292, "tx_bytes": 8293635 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:36:21.242Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "1.07",
            "perCore": [
                {
                    "load": "1.19",
                    "loadUser": "0.79",
                    "loadSystem": "0.40",
                    "loadIdle": "98.81"
                },
                {
                    "load": "0.80",
                    "loadUser": "0.40",
                    "loadSystem": "0.40",
                    "loadIdle": "99.20"
                },
                {
                    "load": "0.99",
                    "loadUser": "0.40",
                    "loadSystem": "0.59",
                    "loadIdle": "99.01"
                },
                {
                    "load": "1.19",
                    "loadUser": "0.59",
                    "loadSystem": "0.59",
                    "loadIdle": "98.81"
                },
                {
                    "load": "1.19",
                    "loadUser": "0.80",
                    "loadSystem": "0.40",
                    "loadIdle": "98.81"
                },
                {
                    "load": "0.80",
                    "loadUser": "0.60",
                    "loadSystem": "0.20",
                    "loadIdle": "99.20"
                },
                {
                    "load": "0.99",
                    "loadUser": "0.40",
                    "loadSystem": "0.59",
                    "loadIdle": "99.01"
                },
                {
                    "load": "1.39",
                    "loadUser": "0.99",
                    "loadSystem": "0.40",
                    "loadIdle": "98.61"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.66" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.21" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 100300912, "tx_bytes": 8294097 }
        ]
    },
    {
        "timestamp": "2025-10-07T05:36:27.841Z",
        "hostname": "developer",
        "cpu": {
            "cores": 8,
            "speed": 2.4,
            "load": "5.98",
            "perCore": [
                {
                    "load": "6.17",
                    "loadUser": "4.81",
                    "loadSystem": "1.19",
                    "loadIdle": "93.83"
                },
                {
                    "load": "6.01",
                    "loadUser": "4.68",
                    "loadSystem": "1.19",
                    "loadIdle": "93.99"
                },
                {
                    "load": "6.02",
                    "loadUser": "4.38",
                    "loadSystem": "1.42",
                    "loadIdle": "93.98"
                },
                {
                    "load": "6.31",
                    "loadUser": "4.66",
                    "loadSystem": "1.14",
                    "loadIdle": "93.69"
                },
                {
                    "load": "5.77",
                    "loadUser": "4.46",
                    "loadSystem": "1.17",
                    "loadIdle": "94.23"
                },
                {
                    "load": "6.01",
                    "loadUser": "4.70",
                    "loadSystem": "1.18",
                    "loadIdle": "93.99"
                },
                {
                    "load": "5.93",
                    "loadUser": "4.38",
                    "loadSystem": "1.32",
                    "loadIdle": "94.07"
                },
                {
                    "load": "5.63",
                    "loadUser": "4.26",
                    "loadSystem": "1.27",
                    "loadIdle": "94.37"
                }
            ]
        },
        "memory": { "totalGB": "15.41", "usedGB": "8.65" },
        "disk": [{ "mount": "/", "sizeGB": "467.89", "usedGB": "40.21" }],
        "network": [
            { "iface": "wlp0s20f3", "rx_bytes": 100302543, "tx_bytes": 8300908 }
        ]
    }
]

const InfrastructureResult = () => {


    const cpuData = data.map(item => ({ timestamp: item.timestamp, cpu: { load: item.cpu.load } }));


    const networkData = data.map(item => ({ timestamp: item.timestamp, rx_bytes: item.network[0].rx_bytes, tx_bytes: item.network[0].tx_bytes }));

    console.log(data[0].network);

    console.log(networkData)
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">CPU Load Over Time</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <CPUChart data={cpuData} />
                <MemoryChart data={data} />
                <StorageChart data={data} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Network Traffic Chart spans 2 columns */}
                <div className="md:col-span-2">
                    <NetworkTrafficChart data={networkData} />
                </div>

                {/* Disk Usage spans 1 column */}
                <div className="md:col-span-1">
                    <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
                        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">
                            CPU Load Over Time
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 dark:border-gray-700">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-gray-800">
                                        <th className="px-4 py-2 text-left">Mount Point</th>
                                        <th className="px-4 py-2 text-left">Size (GB)</th>
                                        <th className="px-4 py-2 text-left">Used (GB)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data[0].disk.map((item, index) => (
                                        <tr
                                            key={index}
                                            className={index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}
                                        >
                                            <td className="px-4 py-2">{item.mount}</td>
                                            <td className="px-4 py-2">{item.sizeGB}</td>
                                            <td className="px-4 py-2">{item.usedGB}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default InfrastructureResult