import { useSelector, useDispatch } from "react-redux";
import {
  selectBasketItems,
  selectTotalCount,
  selectTotalPrice,
  incrementItem,
  decrementItem,
  removeItem,
  clearBasket,
} from "../../store/basketSlice";

const BasketDrawer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const totalCount = useSelector(selectTotalCount);
  const totalPrice = useSelector(selectTotalPrice);

  const handleClearBasket = () => {
    dispatch(clearBasket());
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/40 z-[55] transition-opacity" onClick={onClose} />}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-surface-container-lowest z-[60] flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-outline-variant">
          <h2 className="font-headline font-bold text-xl text-tertiary">Sepetim</h2>
          <button
            className="text-tertiary hover:opacity-80 transition-opacity active:scale-95"
            onClick={onClose}
            aria-label="Kapat"
          >
            <span className="material-symbols-outlined" data-icon="close">
              close
            </span>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant" data-icon="shopping_cart">
                shopping_cart
              </span>
              <p className="text-on-surface-variant">Sepetiniz boş</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.type}`} className="flex gap-3 pb-4 border-b border-outline-variant">
                {/* Product Image */}
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />

                {/* Item Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-headline font-bold text-sm text-tertiary truncate">{item.name}</h3>
                  <span className="inline-block text-[10px] font-bold bg-tertiary-container text-on-tertiary-container px-2 py-1 rounded-full mt-1">
                    {item.type}
                  </span>
                  <p className="text-primary font-bold text-sm mt-2">{item.price} TL</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 flex items-center justify-center"
                      onClick={() => dispatch(decrementItem({ id: item.id, type: item.type }))}
                      aria-label="Azalt"
                    >
                      <span className="material-symbols-outlined text-sm" data-icon="remove">
                        remove
                      </span>
                    </button>
                    <span className="text-sm font-bold text-on-surface w-6 text-center">{item.quantity}</span>
                    <button
                      className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 flex items-center justify-center"
                      onClick={() => dispatch(incrementItem({ id: item.id, type: item.type }))}
                      aria-label="Arttır"
                    >
                      <span className="material-symbols-outlined text-sm" data-icon="add">
                        add
                      </span>
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  className="text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 flex-shrink-0"
                  onClick={() => dispatch(removeItem({ id: item.id, type: item.type }))}
                  aria-label="Sil"
                >
                  <span className="material-symbols-outlined" data-icon="delete">
                    delete
                  </span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-outline-variant flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant text-sm">
                {totalCount} {totalCount === 1 ? "ürün" : "ürün"}
              </span>
              <span className="text-tertiary font-bold text-lg">{totalPrice.toFixed(2)} TL</span>
            </div>
            <button
              className="w-full py-3 bg-primary text-on-primary rounded-xl font-headline font-bold transition-all hover:opacity-80 active:scale-95"
              onClick={handleClearBasket}
            >
              Sepeti Onayla
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BasketDrawer;
