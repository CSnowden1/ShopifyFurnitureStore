import CategoryPanel from "~/components/CategoryPanel";

export default function Bath() {

  const bathCategories = [
    'Towels',
    'Shower Curtains',
    'Bath Mats',
    'Accessories',
    'Storage',
  ];


  return (
    <div>
        <CategoryPanel title="Bath Categories" categories={bathCategories} />
    </div>
  )
}
