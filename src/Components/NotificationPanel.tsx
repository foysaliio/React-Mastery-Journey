type NotificationPanelProps = {
  hasNotifications: boolean;
  count: number;
};

function NotificationPanel({
  hasNotifications,
  count,
}: NotificationPanelProps) {
  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Notifications</h2>

      {hasNotifications && (
        <p className="mt-3 text-slate-300">
          You have {count} new notifications.
        </p>
      )}
    </section>
  );
}

export default NotificationPanel;
