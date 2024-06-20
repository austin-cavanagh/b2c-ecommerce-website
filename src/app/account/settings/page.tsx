// Features not yet implemented

import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import ChangePassword from '@/components/account/ChangePassword';
import DeleteAccount from '@/components/account/DeleteAccount';
import PersonalInformation from '@/components/account/PersonalInformation';
import { getServerSession } from 'next-auth';

export default async function SettingsRoute() {
  const session = await getServerSession(authOptions);
  const fullName = session?.user?.name as string;
  const email = session?.user?.email as string;

  return (
    <div className="divide-y divide-white/5">
      {/* Personal Information */}
      <PersonalInformation fullName={fullName} email={email} />

      {/* Change Password */}
      <ChangePassword />

      {/* Delete Account */}
      <DeleteAccount />
    </div>
  );
}
