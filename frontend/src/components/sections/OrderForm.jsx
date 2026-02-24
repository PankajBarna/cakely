import { useState } from 'react';
import { MessageCircle, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { sectionsConfig } from '../../config/sections';
import { openWhatsApp } from '../../utils/whatsapp';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';



export const OrderForm = () => {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();

  const [formData, setFormData] = useState({
    customerName: '',
    mobile: '',
    occasionTheme: '',
    dateNeeded: '',
    time: '',
    deliveryMode: '',
    area: '',
    budget: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  if (!sectionsConfig.orderForm) return null;

  const { orderForm } = siteConfig;


  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Name is required';
    }
    if (cartItems.length === 0) {
      newErrors.cart = 'Please add at least one item to your order';
    }
    if (!formData.dateNeeded) {
      newErrors.dateNeeded = 'Date is required';
    }
    if (!formData.deliveryMode) {
      newErrors.deliveryMode = 'Please select delivery mode';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Build items list for WhatsApp message
    const itemsList = cartItems.map(item =>
      `${item.name} x${item.quantity} (from ₹${item.priceFrom.toLocaleString()})`
    ).join('\n');

    // Create enhanced form data with items
    const orderData = {
      ...formData,
      itemType: itemsList,
    };

    // Open WhatsApp with formatted message
    openWhatsApp(orderData);

    // Clear cart after successful order
    clearCart();
  };

  const totalEstimate = cartItems.reduce(
    (sum, item) => sum + item.priceFrom * item.quantity,
    0
  );

  return (
    <SectionWrapper id="contact" bgColor="secondary">
      <div data-testid="order-form-section" className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {orderForm.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {orderForm.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-lg"
        >
          {/* Selected Items Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-5 h-5 text-primary" />
              <Label className="text-lg font-heading font-semibold text-foreground">
                Your Order <span className="text-primary">*</span>
              </Label>
            </div>

            {cartItems.length === 0 ? (
              <div className="bg-secondary rounded-xl p-6 text-center">
                <p className="text-muted-foreground mb-2">No items selected yet</p>
                <p className="text-sm text-muted-foreground">
                  Click "Add" on menu items above to add them to your order
                </p>
                {errors.cart && (
                  <p className="text-red-500 text-sm mt-2">{errors.cart}</p>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    data-testid={`cart-item-${item.id}`}
                    className="bg-secondary rounded-xl p-4"
                  >
                    <div className='flex justify-between align-middle'>
                      <div className='flex items-start gap-3'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded-lg object-cover shrink-0"
                        /></div>

                      {/* Quantity Controls */}
                      <div className="">
                        <div className='flex items-center gap-2 shrink-0'>
                          <button
                            type="button"
                            data-testid={`cart-decrease-${item.id}`}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>

                          <span className="w-6 text-center font-medium">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            data-testid={`cart-increase-${item.id}`}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between mt-2 align-middle'>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground leading-snug line-clamp-2">
                          {item.name}
                        </h4>
                        <p className="text-sm text-primary font-semibold">
                          From ₹{item.priceFrom.toLocaleString()}
                        </p>
                      </div>

                      {/* Remove Button */}
                      <button
                        type="button"
                        data-testid={`cart-remove-${item.id}`}
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-muted-foreground hover:text-red-500 transition-colors shrink-0 align-top"
                      >
                        <div className='p-2 bg-red-100 rounded-full top-0'>
                          <Trash2 className="w-5 h-5 text-red-400" />

                        </div>

                        {/* <div className='text-sm'>Remove</div> */}
                      </button>
                    </div>



                  </div>

                  // </div>
                ))}

                {/* Total Estimate */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-muted-foreground">Estimated Total:</span>
                  <span className="font-heading text-xl font-bold text-primary">
                    From ₹{totalEstimate.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  * Final price will be confirmed based on customization
                </p>

                {/* Add More Items Button */}
                <div className="flex justify-center sm:justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    data-testid="add-more-items-btn"
                    className="mt-4 rounded-full border-primary text-primary hover:bg-primary hover:text-white
               px-6 sm:px-5 w-auto sm:w-auto"
                    onClick={() => {
                      if (siteConfig.site.mode === "fourPage") {
                        navigate("/menu");
                        return;
                      }
                      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add More
                  </Button>
                </div>
                {/* <div className='flex justify-center sm:justify-end'>
                  <Button
                    type="button"
                    variant="outline"
                    data-testid="add-more-items-btn"
                    className="mt-4 rounded-full border-primary text-primary hover:bg-primary hover:text-white
               px-6 sm:px-5 w-auto sm:w-auto"
                    onClick={() => {
                      if (siteConfig.site.mode === "fourPage") {
                        navigate("/menu");
                        return;
                      }
                      const menuSection = document.getElementById("menu");
                      if (menuSection) {
                        menuSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  // onClick={() => {
                  //   const menuSection = document.getElementById('menu');
                  //   if (menuSection) {
                  //     menuSection.scrollIntoView({ behavior: 'smooth' });
                  //   }
                  // }}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add More
                  </Button>
                </div> */}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* Customer Details */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {/* Customer Name - Required */}
            <div className="space-y-2">
              <Label htmlFor="customerName" className="text-foreground">
                Your Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="customerName"
                data-testid="order-form-name"
                placeholder="Enter your name"
                value={formData.customerName}
                onChange={(e) => handleChange('customerName', e.target.value)}
                className={`rounded-xl h-12 ${errors.customerName ? 'border-red-500' : ''}`}
              />
              {errors.customerName && (
                <p className="text-red-500 text-xs">{errors.customerName}</p>
              )}
            </div>

            {/* Mobile - Optional */}
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-foreground">
                Mobile Number
              </Label>
              <Input
                id="mobile"
                data-testid="order-form-mobile"
                type="tel"
                placeholder="+91 9876543210"
                value={formData.mobile}
                onChange={(e) => handleChange('mobile', e.target.value)}
                className="rounded-xl h-12"
              />
            </div>

            {/* Occasion/Theme - Optional */}
            <div className="space-y-2">
              <Label htmlFor="occasionTheme" className="text-foreground">
                Occasion / Theme
              </Label>
              <Input
                id="occasionTheme"
                data-testid="order-form-occasion"
                placeholder="e.g., Birthday, Baby Shower"
                value={formData.occasionTheme}
                onChange={(e) => handleChange('occasionTheme', e.target.value)}
                className="rounded-xl h-12"
              />
            </div>

            {/* Date Needed - Required */}
            <div className="space-y-2">
              <Label htmlFor="dateNeeded" className="text-foreground">
                Date Needed <span className="text-primary">*</span>
              </Label>
              <Input
                id="dateNeeded"
                data-testid="order-form-date"
                type="date"
                value={formData.dateNeeded}
                onChange={(e) => handleChange('dateNeeded', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className={`rounded-xl h-12 ${errors.dateNeeded ? 'border-red-500' : ''}`}
              />
              {errors.dateNeeded && (
                <p className="text-red-500 text-xs">{errors.dateNeeded}</p>
              )}
            </div>

            {/* Time - Optional */}
            <div className="space-y-2">
              <Label htmlFor="time" className="text-foreground">
                Preferred Time
              </Label>
              <Input
                id="time"
                data-testid="order-form-time"
                type="time"
                value={formData.time}
                onChange={(e) => handleChange('time', e.target.value)}
                className="rounded-xl h-12"
              />
            </div>

            {/* Delivery Mode - Required */}
            <div className="space-y-2">
              <Label htmlFor="deliveryMode" className="text-foreground">
                Delivery / Pickup <span className="text-primary">*</span>
              </Label>
              <Select
                value={formData.deliveryMode}
                onValueChange={(value) => handleChange('deliveryMode', value)}
              >
                <SelectTrigger
                  id="deliveryMode"
                  data-testid="order-form-delivery-mode"
                  className={`rounded-xl h-12 ${errors.deliveryMode ? 'border-red-500' : ''}`}
                >
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  {orderForm.deliveryModes.map((mode) => (
                    <SelectItem key={mode} value={mode}>
                      {mode}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.deliveryMode && (
                <p className="text-red-500 text-xs">{errors.deliveryMode}</p>
              )}
            </div>

            {/* Area - Optional */}
            <div className="space-y-2">
              <Label htmlFor="area" className="text-foreground">
                Delivery Area
              </Label>
              <Input
                id="area"
                data-testid="order-form-area"
                placeholder="Your locality"
                value={formData.area}
                onChange={(e) => handleChange('area', e.target.value)}
                className="rounded-xl h-12"
              />
            </div>

            {/* Budget - Optional */}
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-foreground">
                Budget Range
              </Label>
              <Input
                id="budget"
                data-testid="order-form-budget"
                placeholder="e.g., ₹1000 - ₹1500"
                value={formData.budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                className="rounded-xl h-12"
              />
            </div>

            {/* Notes - Optional */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notes" className="text-foreground">
                Additional Notes
              </Label>
              <Textarea
                id="notes"
                data-testid="order-form-notes"
                placeholder="Any special instructions, dietary requirements, flavor preferences, or reference images..."
                value={formData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                className="rounded-xl min-h-[100px]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <Button
              type="submit"
              data-testid="order-form-submit"
              size="lg"
              className="w-full bg-primary hover:bg-accent text-white rounded-full px-6 py-6 text-base font-medium shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
            >
              <span className="flex items-center justify-center gap-2 min-w-0">
                <MessageCircle className="w-5 h-5 shrink-0" />

                {/* Text: truncate on tiny screens */}
                <span className="min-w-0 truncate">
                  Send Order on WhatsApp
                </span>

                {/* Badge: never shrink, but only show on sm+ */}
                {cartItems.length > 0 && (
                  <span className="hidden sm:inline-flex ml-2 px-2 py-0.5 bg-white/20 rounded-full text-sm shrink-0">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
                  </span>
                )}
              </span>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Your order details will be sent to us via WhatsApp for confirmation
            </p>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default OrderForm;







// import { useState } from 'react';
// import { Send, MessageCircle } from 'lucide-react';
// import { siteConfig } from '../../config/siteConfig';
// import { sectionsConfig } from '../../config/sections';
// import { openWhatsApp } from '../../utils/whatsapp';
// import { SectionWrapper } from '../layout/SectionWrapper';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import { Label } from '../ui/label';
// import { Textarea } from '../ui/textarea';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '../ui/select';

// export const OrderForm = () => {
//   const [formData, setFormData] = useState({
//     customerName: '',
//     mobile: '',
//     itemType: '',
//     weight: '',
//     flavor: '',
//     occasionTheme: '',
//     dateNeeded: '',
//     time: '',
//     deliveryMode: '',
//     area: '',
//     budget: '',
//     notes: '',
//   });

//   const [errors, setErrors] = useState({});

//   if (!sectionsConfig.orderForm) return null;

//   const { orderForm } = siteConfig;

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.customerName.trim()) {
//       newErrors.customerName = 'Name is required';
//     }
//     if (!formData.itemType) {
//       newErrors.itemType = 'Please select an item type';
//     }
//     if (!formData.dateNeeded) {
//       newErrors.dateNeeded = 'Date is required';
//     }
//     if (!formData.deliveryMode) {
//       newErrors.deliveryMode = 'Please select delivery mode';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     // Open WhatsApp with formatted message
//     openWhatsApp(formData);
//   };

//   return (
//     <SectionWrapper id= "contact" bgColor="secondary">
//       <div data-testid="order-form-section" className="max-w-3xl mx-auto">
//         <div className="text-center mb-10 md:mb-12">
//           <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//             {orderForm.title}
//           </h2>
//           <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
//             {orderForm.subtitle}
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-3xl p-6 md:p-10 shadow-lg"
//         >
//           <div className="grid md:grid-cols-2 gap-5 md:gap-6">
//             {/* Customer Name - Required */}
//             <div className="space-y-2">
//               <Label htmlFor="customerName" className="text-foreground">
//                 Your Name <span className="text-primary">*</span>
//               </Label>
//               <Input
//                 id="customerName"
//                 data-testid="order-form-name"
//                 placeholder="Enter your name"
//                 value={formData.customerName}
//                 onChange={(e) => handleChange('customerName', e.target.value)}
//                 className={`rounded-xl h-12 ${errors.customerName ? 'border-red-500' : ''}`}
//               />
//               {errors.customerName && (
//                 <p className="text-red-500 text-xs">{errors.customerName}</p>
//               )}
//             </div>

//             {/* Mobile - Optional */}
//             <div className="space-y-2">
//               <Label htmlFor="mobile" className="text-foreground">
//                 Mobile Number
//               </Label>
//               <Input
//                 id="mobile"
//                 data-testid="order-form-mobile"
//                 type="tel"
//                 placeholder="+91 9876543210"
//                 value={formData.mobile}
//                 onChange={(e) => handleChange('mobile', e.target.value)}
//                 className="rounded-xl h-12"
//               />
//             </div>

//             {/* Item Type - Required */}
//             <div className="space-y-2">
//               <Label htmlFor="itemType" className="text-foreground">
//                 What do you need? <span className="text-primary">*</span>
//               </Label>
//               <Select
//                 value={formData.itemType}
//                 onValueChange={(value) => handleChange('itemType', value)}
//               >
//                 <SelectTrigger
//                   id="itemType"
//                   data-testid="order-form-item-type"
//                   className={`rounded-xl h-12 ${errors.itemType ? 'border-red-500' : ''}`}
//                 >
//                   <SelectValue placeholder="Select item type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {orderForm.itemTypes.map((item) => (
//                     <SelectItem key={item} value={item}>
//                       {item}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               {errors.itemType && (
//                 <p className="text-red-500 text-xs">{errors.itemType}</p>
//               )}
//             </div>

//             {/* Weight - Optional */}
//             <div className="space-y-2">
//               <Label htmlFor="weight" className="text-foreground">
//                 Weight / Quantity
//               </Label>
//               <Select
//                 value={formData.weight}
//                 onValueChange={(value) => handleChange('weight', value)}
//               >
//                 <SelectTrigger
//                   id="weight"
//                   data-testid="order-form-weight"
//                   className="rounded-xl h-12"
//                 >
//                   <SelectValue placeholder="Select weight" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {orderForm.weightOptions.map((weight) => (
//                     <SelectItem key={weight} value={weight}>
//                       {weight}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Flavor - Optional */}
//             <div className="space-y-2">
//               <Label htmlFor="flavor" className="text-foreground">
//                 Flavor Preference
//               </Label>
//               <Select
//                 value={formData.flavor}
//                 onValueChange={(value) => handleChange('flavor', value)}
//               >
//                 <SelectTrigger
//                   id="flavor"
//                   data-testid="order-form-flavor"
//                   className="rounded-xl h-12"
//                 >
//                   <SelectValue placeholder="Select flavor" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {orderForm.flavors.map((flavor) => (
//                     <SelectItem key={flavor} value={flavor}>
//                       {flavor}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Occasion/Theme - Optional */}
//             <div className="space-y-2">
//               <Label htmlFor="occasionTheme" className="text-foreground">
//                 Occasion / Theme
//               </Label>
//               <Input
//                 id="occasionTheme"
//                 data-testid="order-form-occasion"
//                 placeholder="e.g., Birthday, Baby Shower"
//                 value={formData.occasionTheme}
//                 onChange={(e) => handleChange('occasionTheme', e.target.value)}
//                 className="rounded-xl h-12"
//               />
//             </div>

//             {/* Date Needed - Required */}
//             <div className="space-y-2">
//               <Label htmlFor="dateNeeded" className="text-foreground">
//                 Date Needed <span className="text-primary">*</span>
//               </Label>
//               <Input
//                 id="dateNeeded"
//                 data-testid="order-form-date"
//                 type="date"
//                 value={formData.dateNeeded}
//                 onChange={(e) => handleChange('dateNeeded', e.target.value)}
//                 min={new Date().toISOString().split('T')[0]}
//                 className={`rounded-xl h-12 ${errors.dateNeeded ? 'border-red-500' : ''}`}
//               />
//               {errors.dateNeeded && (
//                 <p className="text-red-500 text-xs">{errors.dateNeeded}</p>
//               )}
//             </div>

//             {/* Time - Optional */}
//             <div className="space-y-2">
//               <Label htmlFor="time" className="text-foreground">
//                 Preferred Time
//               </Label>
//               <Input
//                 id="time"
//                 data-testid="order-form-time"
//                 type="time"
//                 value={formData.time}
//                 onChange={(e) => handleChange('time', e.target.value)}
//                 className="rounded-xl h-12"
//               />
//             </div>

//             {/* Delivery Mode - Required */}
//             <div className="space-y-2">
//               <Label htmlFor="deliveryMode" className="text-foreground">
//                 Delivery / Pickup <span className="text-primary">*</span>
//               </Label>
//               <Select
//                 value={formData.deliveryMode}
//                 onValueChange={(value) => handleChange('deliveryMode', value)}
//               >
//                 <SelectTrigger
//                   id="deliveryMode"
//                   data-testid="order-form-delivery-mode"
//                   className={`rounded-xl h-12 ${errors.deliveryMode ? 'border-red-500' : ''}`}
//                 >
//                   <SelectValue placeholder="Select option" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {orderForm.deliveryModes.map((mode) => (
//                     <SelectItem key={mode} value={mode}>
//                       {mode}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               {errors.deliveryMode && (
//                 <p className="text-red-500 text-xs">{errors.deliveryMode}</p>
//               )}
//             </div>

//             {/* Area - Optional */}
//             <div className="space-y-2">
//               <Label htmlFor="area" className="text-foreground">
//                 Delivery Area
//               </Label>
//               <Input
//                 id="area"
//                 data-testid="order-form-area"
//                 placeholder="Your locality"
//                 value={formData.area}
//                 onChange={(e) => handleChange('area', e.target.value)}
//                 className="rounded-xl h-12"
//               />
//             </div>

//             {/* Budget - Optional */}
//             <div className="space-y-2 md:col-span-2">
//               <Label htmlFor="budget" className="text-foreground">
//                 Budget Range
//               </Label>
//               <Input
//                 id="budget"
//                 data-testid="order-form-budget"
//                 placeholder="e.g., ₹1000 - ₹1500"
//                 value={formData.budget}
//                 onChange={(e) => handleChange('budget', e.target.value)}
//                 className="rounded-xl h-12"
//               />
//             </div>

//             {/* Notes - Optional */}
//             <div className="space-y-2 md:col-span-2">
//               <Label htmlFor="notes" className="text-foreground">
//                 Additional Notes
//               </Label>
//               <Textarea
//                 id="notes"
//                 data-testid="order-form-notes"
//                 placeholder="Any special instructions, dietary requirements, or reference images..."
//                 value={formData.notes}
//                 onChange={(e) => handleChange('notes', e.target.value)}
//                 className="rounded-xl min-h-[100px]"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-8 text-center">
//             <Button
//               type="submit"
//               data-testid="order-form-submit"
//               size="lg"
//               className="bg-primary hover:bg-accent text-white rounded-full px-10 py-6 text-base font-medium shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
//             >
//               <MessageCircle className="w-5 h-5 mr-2" />
//               Send Order on WhatsApp
//             </Button>
//             <p className="text-sm text-muted-foreground mt-4">
//               Your order details will be sent to us via WhatsApp for confirmation
//             </p>
//           </div>
//         </form>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default OrderForm;
