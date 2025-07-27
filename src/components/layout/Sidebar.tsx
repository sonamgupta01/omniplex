import Link from 'next/link';

// At the bottom of your sidebar component, add:
<div className="p-4 border-t">
  <Link 
    href="/pricing"
    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg text-center block hover:from-blue-600 hover:to-purple-700"
  >
    ⭐ Subscribe Now
  </Link>
</div>

