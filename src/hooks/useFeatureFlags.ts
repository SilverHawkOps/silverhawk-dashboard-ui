import { useGetApplicationFeatureFlagsQuery } from "@/services/api";
import { useMemo } from "react";

export function useFeatureFlags() {
    const { data, isLoading, isFetching, refetch } = useGetApplicationFeatureFlagsQuery();

    const flags = useMemo(() => data || {}, [data]);

    const isFeatureEnabled = (key: string) => !!flags[key];

    return {
        loading: isLoading || isFetching,
        flags,
        isFeatureEnabled,
        refreshFlags: refetch,
    };
}
