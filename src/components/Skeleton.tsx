import { Skeleton } from "antd";




export const SkeletonCard = () => {
    return (
        <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", border: "1px solid #eee" }}>
            <div style={{ padding: 6, textAlign: "left" }}>
                <div style={{ marginTop: 6, textAlign: "center" }}>
                    <Skeleton.Avatar active size={200} shape="square" />
                </div>
            </div>

            <div style={{ padding: "0 16px 16px" }}>

                <div style={{ marginTop: 12 }}>
                    <Skeleton active />
                </div>
            </div>

            <div style={{ borderTop: "1px solid #eee", padding: "16px", display: "flex", justifyContent: "space-between" }}>
                <Skeleton.Button active style={{ width: '100%' }} size="small" />
                <Skeleton.Button active style={{ width: '100%' }} size="small" />
            </div>
        </div>
    );
};