import { useState } from 'react'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { apps } from '@/pages/admin/apps/data'
import { BotIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { adminRouteCollection } from '@/routes/data/admin_route'

const appText = new Map<string, string>([
  ['all', 'All Apps'],
  ['connected', 'Connected'],
  ['notConnected', 'Not Connected'],
])

export default function Apps() {
  const [sort] = useState('ascending')
  const [appType, setAppType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const filteredApps = apps
    .sort((a, b) =>
      sort === 'ascending'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
    .filter((app) =>
      appType === 'connected'
        ? app.connected
        : appType === 'notConnected'
          ? !app.connected
          : true
    )
    .filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className='pt-4'>

      <div className="flex justify-between">
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>
            App Integrations
          </h1>
          <p className='text-muted-foreground'>
            Here&apos;s a list of your apps for the integration!
          </p>
        </div>

        <Button
          onClick={() => navigate(adminRouteCollection.addBot)}
          variant='default'
          className='flex items-center gap-2'>
          <BotIcon />
        </Button>

      </div>



      <div className='my-4 flex items-end justify-between sm:my-0 sm:items-center'>
        <div className='flex flex-col gap-4 sm:my-4 sm:flex-row'>
          <Input
            placeholder='Filter apps...'
            className='h-9 w-40 lg:w-[250px]'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select value={appType} onValueChange={setAppType}>
            <SelectTrigger className='w-36'>
              <SelectValue>{appText.get(appType)}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All Apps</SelectItem>
              <SelectItem value='connected'>Connected</SelectItem>
              <SelectItem value='notConnected'>Not Connected</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>
      <ul className='faded-bottom no-scrollbar grid gap-4 overflow-auto pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3'>
        {filteredApps.map((app) => (
          <Link
            to={`/admin/apps/${app.name}/bots/list  `}
            key={app.name}
          >
            <li
              key={app.name}
              className='rounded-lg border p-4
              cursor-pointer 
              border-primary 
              hover:shadow-md  shadow-sm shadow-neon-primary   bg-gradient-to-r from-background to-primary-muted'
            >
              <div className='mb-8 flex items-center justify-between'>
                <div
                  className={`flex size-10 items-center justify-center rounded-lg ${app.color} p-2`}
                >
                  {app.logo}
                </div>
                <Button
                  variant={app.connected ? 'destructive' : 'neon'}
                  size='sm'

                >
                  {app.connected ? 'Connected' : 'Connect'}
                </Button>
              </div>
              <div>
                <h2 className='mb-1 font-semibold'>{app.name}</h2>
                <p className='line-clamp-2 text-gray-500'>{app.desc}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}